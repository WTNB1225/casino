FROM node:22-slim

WORKDIR /app

# パッケージファイルをコピー
COPY ./package*.json ./

# 依存関係をインストール
RUN yarn install

# 必要なパッケージをインストール
RUN apt-get update && apt-get install -y bash && rm -rf /var/lib/apt/lists/*

# アプリケーションのソースコードをコピー
COPY . .

# アプリケーションがリッスンするポートを指定
EXPOSE 3000

# アプリケーションを起動
CMD ["yarn", "dev"]