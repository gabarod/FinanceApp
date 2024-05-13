#!/bin/bash

# Define el directorio base para las interfaces
INTERFACE_DIR="src/interfaces"

# Crea el directorio de interfaces si no existe
mkdir -p $INTERFACE_DIR

# Crea archivos para las interfaces
touch $INTERFACE_DIR/ProductListProps.ts
touch $INTERFACE_DIR/ProductDetailsProps.ts
touch $INTERFACE_DIR/AddProductProps.ts
touch $INTERFACE_DIR/DeleteProductProps.ts

# Añade contenido inicial a cada archivo de interfaz
echo "// Interface for ProductList component props
export interface ProductListProps {
  // Define any specific props here if necessary
}" > $INTERFACE_DIR/ProductListProps.ts

echo "// Interface for ProductDetails component props
export interface ProductDetailsProps {
  productId: number;
}" > $INTERFACE_DIR/ProductDetailsProps.ts

echo "// Interface for AddProduct component props
export interface AddProductProps {
  // Define specific props for adding products if necessary
}" > $INTERFACE_DIR/AddProductProps.ts

echo "// Interface for DeleteProduct component props
export interface DeleteProductProps {
  productId: number;
  visible: boolean;
  onClose: () => void;
}" > $INTERFACE_DIR/DeleteProductProps.ts

echo "Interfaces created successfully in $INTERFACE_DIR"
