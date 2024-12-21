FROM node:20-alpine

# Install pnpm
RUN npm install -g pnpm

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN pnpm install

# Copy source code
COPY . .

# Build the application
RUN pnpm run build

# Expose port (matching the port used in the application)
EXPOSE 3000

# Start the application
CMD ["pnpm", "run", "start:prod"]
