# Use Node.js as base image
FROM node:18

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    android-tools-adb \
    android-tools-fastboot \
    openjdk-11-jdk \
    ruby \
    ruby-dev \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Install Ruby dependencies
COPY Gemfile Gemfile.lock ./
RUN gem install bundler && bundle install

# Install app dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy the rest of the application
COPY . .

# Expose Metro Bundler port
EXPOSE 8081

# Default command
CMD ["yarn", "start"]
