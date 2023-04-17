import { ProductSizeStyled } from "./style"

const ProductSizeSelection = () => {
  return (
    <ProductSizeStyled>
      <span className="formTitle">Tamanho</span>
      <div className="productSizeSelection">
        <input type="radio" id="p" name="size" value="p" />
        <input type="radio" id="m" name="size" value="m" />
        <input type="radio" id="g" name="size" value="g" />
        <input type="radio" id="gg" name="size" value="gg" />
        <input type="radio" id="exgg" name="size" value="exgg" />
        <input type="radio" id="exgg2" name="size" value="exgg2" />

        <label htmlFor="p" className="sizeOption">
          <span>p</span>
        </label>
        <label htmlFor="m" className="sizeOption">
          <span>m</span>
        </label>
        <label htmlFor="g" className="sizeOption">
          <span>g</span>
        </label>
        <label htmlFor="gg" className="sizeOption">
          <span>gg</span>
        </label>
        <label htmlFor="exgg" className="sizeOption">
          <span>exgg</span>
        </label>
        <label htmlFor="exgg2" className="sizeOption">
          <span>exgg2</span>
        </label>
      </div>
      <div className="productColorSelection">
        <input type="radio" id="red" name="size" value="red" />
        <input type="radio" id="violet" name="size" value="violet" />
        <input type="radio" id="green" name="size" value="green" />
        <input type="radio" id="yellow" name="size" value="yellow" />

        <label htmlFor="red" className="sizeOption ">
          <span className="red"></span>
        </label>
        <label htmlFor="violet" className="sizeOption ">
          <span className="violet"></span>
        </label>
        <label htmlFor="green" className="sizeOption ">
          <span className="green"></span>
        </label>
        <label htmlFor="yellow" className="sizeOption ">
          <span className="yellow"></span>
        </label>
      </div>
    </ProductSizeStyled>
  )
}

export default ProductSizeSelection