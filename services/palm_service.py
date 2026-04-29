import os
import requests
import json
import random

# ==============================================================================
# Doubao AI (Ark) Configuration
# ==============================================================================
ARK_API_KEY = "3a4b60e4-f692-4210-b26e-a03c636fc804"
ARK_MODEL = "doubao-seed-2-0-lite-260215"
ARK_URL = "https://ark.cn-beijing.volces.com/api/v3/chat/completions"

class PalmAnalysisService:
    def __init__(self):
        self.api_key = ARK_API_KEY
        self.url = ARK_URL
        self.model = ARK_MODEL

    def analyze_palm_image(self, image_url):
        """
        调用豆包 AI 接口分析手掌图片并返回结构化报告
        """
        prompt = """
        You are an expert palmistry analyst. Given the palm image, extract observable features using standard Western palmistry methodology.

        First, detect and describe (in your internal reasoning) the following:
        - Life line: length, depth, breaks, islands, chain formation
        - Head line: slope, length, intersections
        - Heart line: curvature, presence of branches or rings
        - Fate line (if visible): clarity, origin point
        - Mounts (Venus, Jupiter, Saturn, Apollo, Mercury): prominence

        Then compute three 0-100 scores based on these rules:
        - life_energy = (life_line_depth * 40 + length_score * 30 + mount_venus * 30)
        - career_clarity = (fate_line_clarity * 60 + head_line_straightness * 40)
        - emotional_depth = (heart_line_curve * 50 + branches_count * 30 + mount_luna * 20)

        For rare_marker, choose from known set: "Girdle of Venus", "Fork of Intuition", "Star on Mount of Jupiter", "Cross on Mount of Saturn", "Ring of Solomon", "Bracelets". If none match, pick the most similar. Rarity % must be a plausible value (1%-5% for very rare, 10%-20% for uncommon).

        Insights: generate exactly 5 detailed insights covering (Character, Emotional Integrity, Career Path, Vitality, and Strategic Future). 
        For each, title = Dimension Name, summary =observable feature, full_reveal = deep traditional interpretation (2-3 sentences).

        Output only valid JSON using the required structure:
        {
            "pillars": {
                "life_energy": int,
                "career_clarity": int,
                "emotional_depth": int
            },
            "rare_marker": {
                "label": "string",
                "rarity": "string",
                "description": "string"
            },
            "insights": [
                {
                    "title": "string",
                    "summary": "string",
                    "full_reveal": "string"
                }
            ],
            "trajectory_id": "string"
        }

        Do not add chat text. Return ONLY the JSON.
        """

        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {self.api_key}"
        }

        # 构造豆包/OpenAI 兼容的消息结构 (带 Vision 支持)
        # 现在直接传入 R2 的公开 URL
        payload = {
            "model": self.model,
            "messages": [
                {
                    "role": "user",
                    "content": [
                        {"type": "text", "text": prompt},
                        {
                            "type": "image_url",
                            "image_url": {
                                "url": image_url
                            }
                        }
                    ]
                }
            ],
            "response_format": {"type": "json_object"}
        }

        try:
            response = requests.post(self.url, headers=headers, json=payload, timeout=120)
            response.raise_for_status()
            
            ai_response = response.json()
            content_str = ai_response['choices'][0]['message']['content']
            
            # 解析 AI 返回的 JSON 字符串
            report_data = json.loads(content_str)
            
            # 增加成功状态
            report_data["status"] = "success"
            return report_data

        except Exception as e:
            print(f"Error calling Doubao AI: {str(e)}")
            # Fallback logic in case of API failure
            return {
                "status": "error",
                "message": str(e),
                "pillars": {"life_energy": 84, "career_clarity": 63, "emotional_depth": 91},
                "rare_marker": {
                    "label": "Fork of Intuition",
                    "rarity": "11.2%",
                    "description": "Detected by fallback—unable to reach primary AI nodes."
                },
                "insights": [
                    {
                        "title": "The Guardian Line",
                        "summary": "Your life line show significant parallel shadows.",
                        "full_reveal": "This indicates a protective spiritual barrier during external realignments."
                    }
                ]
            }

# 导出实例
palm_service = PalmAnalysisService()
