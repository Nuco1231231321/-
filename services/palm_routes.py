from flask import Blueprint, request, jsonify
from services.palm_service import palm_service
from services.r2_service import r2_service
import base64

# 定义蓝图
palm_reading_bp = Blueprint('palm_reading', __name__)

@palm_reading_bp.route('/api/palm/upload', methods=['POST'])
def upload_palm():
    """
    独立上传接口：接收 Base64，返回 R2 URL
    """
    try:
        data = request.get_json()
        if not data or 'image' not in data:
            return jsonify({"error": "No image data"}), 400
            
        image_data = data['image']
        if ',' in image_data:
            image_data = image_data.split(',')[1]
            
        image_bytes = base64.b64decode(image_data)
        image_url = r2_service.upload_image_bytes(image_bytes)
        
        if not image_url:
            return jsonify({"error": "Upload failed"}), 500
            
        return jsonify({"image_url": image_url})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@palm_reading_bp.route('/api/palm/analyze', methods=['POST'])
def analyze_palm():
    """
    纯分析接口：只接收 URL
    """
    try:
        data = request.get_json()
        image_url = data.get('image_url') or data.get('image') # 兼容性处理
        
        if not image_url or not image_url.startswith('http'):
            return jsonify({"error": "Valid image URL required"}), 400
            
        print(f"Analyzing palm from URL: {image_url}")
        report = palm_service.analyze_palm_image(image_url)
        
        # 保持返回数据包含原始 URL
        report["image_url"] = image_url
        return jsonify(report)
        
    except Exception as e:
        print(f"Error in palm analysis: {str(e)}")
        return jsonify({"error": str(e)}), 500
