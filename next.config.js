const isProd = process.env.NODE_ENV === 'production';

const domain = isProd ? `jeandev.vercel.app` : `localhost`;

module.exports = {
  images: {
    domains: [domain]
  }
}