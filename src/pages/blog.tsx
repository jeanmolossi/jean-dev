import React from 'react';
import { Layout, SpanMarker } from '@components';

const Blog: React.FC = () => {
  return (
    <Layout title="Meu Blog">
      <div style={{ height: '100vh', display: "flex", alignItems: 'center', justifyContent: 'center', flexDirection: "column" }}>
        <SpanMarker>Blog em construção</SpanMarker>
        <h1>Esta página não está pronta</h1>
      </div>
    </Layout>
  );
}

export default Blog;