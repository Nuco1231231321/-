import boto3
import uuid
from botocore.config import Config

# ==============================================================================
# Cloudflare R2 Configuration - 已根据你的最新截图更新
# ==============================================================================
R2_ACCOUNT_ID = "4b7df56cc93623eac7d6aa490862972a"
R2_BUCKET_NAME = "plam"
# 以下是你在最新截图中生成的 S3 凭据
R2_ACCESS_KEY_ID = "699ae72c31b488c2632d36d2dafb61c7"
R2_SECRET_ACCESS_KEY = "c5cf9f8fb679685d947cec53e4bc920d4ae9a1742e9d753986cf45bf023de754"

# 你的公开访问域名
R2_PUBLIC_DOMAIN = "https://pub-f3ed944a359647c08f553730ee99ae6b.r2.dev"

class R2Service:
    def __init__(self):
        self.endpoint_url = f"https://{R2_ACCOUNT_ID}.r2.cloudflarestorage.com"
        self.s3_client = boto3.client(
            service_name="s3",
            endpoint_url=self.endpoint_url,
            aws_access_key_id=R2_ACCESS_KEY_ID,
            aws_secret_access_key=R2_SECRET_ACCESS_KEY,
            region_name="auto",  # R2 必须设为 auto
            config=Config(signature_version="s3v4"),
        )

    def upload_image_bytes(self, image_bytes, content_type="image/jpeg"):
        """
        上传图片字节流到 R2，并返回公开 URL
        """
        file_name = f"palm_{uuid.uuid4()}.jpg"
        try:
            print(f"正在上传到 R2: Bucket={R2_BUCKET_NAME}, Key={file_name}")
            
            self.s3_client.put_object(
                Bucket=R2_BUCKET_NAME,
                Key=file_name,
                Body=image_bytes,
                ContentType=content_type
            )
            
            public_url = f"{R2_PUBLIC_DOMAIN}/{file_name}"
            print(f"上传成功！访问地址: {public_url}")
            return public_url
            
        except Exception as e:
            print(f"R2 上传失败详细错误: {str(e)}")
            return None

# 初始化服务
r2_service = R2Service()

# 测试代码 (你可以运行这一段来看看是否成功)
# if __name__ == "__main__":
#     test_data = b"test content"
#     r2_service.upload_image_bytes(test_data)