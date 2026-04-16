import ProductDetail from '../ProductDetail.jsx';

interface Props {
  params: Promise<{
    productName: string;
  }>;
}

export default async function ProductDetailPage({ params }: Props) {
  const { productName } = await params;
  const decodedProductName = decodeURIComponent(productName);

  return <ProductDetail productName={decodedProductName} onBack={undefined} />;
}
