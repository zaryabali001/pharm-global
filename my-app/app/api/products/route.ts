import { NextResponse } from 'next/server';
import { ALL_PRODUCTS } from '@/app/component/Products';

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: ALL_PRODUCTS,
      count: ALL_PRODUCTS.length,
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
