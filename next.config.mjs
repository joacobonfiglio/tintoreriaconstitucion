/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  // Direcciones anteriores de los servicios → nombres actuales ("Limpieza de …" y "Valet de ropa").
  async redirects() {
    return [
      ['limpieza-en-seco', 'limpieza-de-trajes'],
      ['acolchados-y-frazadas', 'limpieza-de-acolchados'],
      ['camisas', 'limpieza-de-camisas'],
      ['camperas-y-abrigos', 'limpieza-de-camperas'],
      ['cortinas-y-blanqueria', 'limpieza-de-cortinas'],
      ['prendas-delicadas', 'limpieza-de-prendas-delicadas'],
      ['lavado-de-trajes', 'limpieza-de-trajes'],
      ['lavado-de-acolchados', 'limpieza-de-acolchados'],
      ['lavado-de-camisas', 'limpieza-de-camisas'],
      ['lavado-de-camperas', 'limpieza-de-camperas'],
      ['lavado-de-cortinas', 'limpieza-de-cortinas'],
      ['lavado-de-prendas-delicadas', 'limpieza-de-prendas-delicadas'],
      ['lavado-de-valet', 'valet-de-ropa'],
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
