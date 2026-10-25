/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  // Direcciones viejas de los servicios (antes de renombrarlos a "Lavado de …").
  async redirects() {
    return [
      ['limpieza-en-seco', 'lavado-de-trajes'],
      ['acolchados-y-frazadas', 'lavado-de-acolchados'],
      ['camisas', 'lavado-de-camisas'],
      ['camperas-y-abrigos', 'lavado-de-camperas'],
      ['cortinas-y-blanqueria', 'lavado-de-cortinas'],
      ['prendas-delicadas', 'lavado-de-prendas-delicadas'],
    ].map(([from, to]) => ({ source: `/servicios/${from}`, destination: `/servicios/${to}`, permanent: true }));
  },
  async headers() {
    return [
      {
        source: '/img/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
};
export default nextConfig;
