/** @type {import('next').NextConfig} */


const nextConfig = {
    images: {
        domains: ['www.hostinger.com', 'multiqos.com', 'media.licdn.com', 'images.unsplash.com', 'i.ibb.co']
    },
    
    experimental : {
        serverActions : true
    }
}

module.exports = nextConfig