import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductPage, Products } from "./Pages";
import { Layout } from "./layout";
function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="products" element={<Products />} />
          <Route path="product/:productId" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
