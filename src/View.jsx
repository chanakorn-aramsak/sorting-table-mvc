import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const ProductTable = ({ products }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>ID</TableCell>
        <TableCell>Name</TableCell>
        <TableCell align="right">Price</TableCell>
        <TableCell align="right">Quantity</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {products.map(product => (
        <TableRow key={product.id}>
          <TableCell>{product.id}</TableCell>
          <TableCell>{product.name}</TableCell>
          <TableCell align="right">{product.price}</TableCell>
          <TableCell align="right">{product.quantity}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default ProductTable;
