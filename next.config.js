// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     loader: 'akamai',
//     path: ''
//   }
// }

// module.exports = {
//   pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
// }

// next.config.js
module.exports = {
    compiler: {
      // Enables the styled-components SWC transform
      styledComponents: true
    }
}
  