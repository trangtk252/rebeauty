/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    images: {
        domains: ['botanistofficial.com', 'images-na.ssl-images-amazon.com', 'imgur.com']
    }
}

module.exports = nextConfig
