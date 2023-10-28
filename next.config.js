/** @type {import('next').NextConfig} */
const nextConfig = {}
module.exports = {
  nextConfig,
}

module.exports = {
  async redirects() {
    const clientId = process.env.NEXT_PUBLIC_LOGIN_CLIENT_ID
    const redirectUrl = process.env.NEXT_PUBLIC_LOGIN_REDIRECT_URI
    return [
      {
        source: '/login',
        destination: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=code`,
        permanent: false,
      },
    ]
  },
}
