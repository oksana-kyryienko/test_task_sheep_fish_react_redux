import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { IProduct } from '../types/Product';
import { addProduct } from '../store/reducers/ProductSlice';
import MyModal from './Modal';

type AddProductAction = {
  type: 'products/addProduct';
  payload: IProduct;
};

type Props = {
  addProduct: (product: IProduct) => AddProductAction;
};


const validationSchema = Yup.object({
  image: Yup.string().required('Введіть посилання на зображення'),
  category: Yup.string().required('Введіть категорію'),
  title: Yup.string().required('Введіть опис товару'),
  rating: Yup.number()
    .min(0, 'Рейтинг повинен бути не менше 0')
    .max(10, 'Рейтинг повинен бути не більше 10'),
});

const initialValues: IProduct = {
  id: 0,
  title: '',
  author: '',
  year: '',
  rating: {
    rate: 0,
    count: 0,
  },
  category: '',
  description: '',
  image: '',
  price: 0,
};

const AddProductForm: React.FC<Props> = ({ addProduct }) => {

  const [modal, setModal] = useState(false);
  const handleSubmit = (values: IProduct) => {
    addProduct(values);
  };

  return (
    <>
      <button className="createbtn" onClick={() => setModal(true)}>Create new product</button>
      <MyModal visible={modal} setVisible={setModal}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form>
              <div>
                <label htmlFor="image">Image</label>
                <Field id="image" name="image" type="text" />
                {formik.touched.image && formik.errors.image ? (
                  <div>{formik.errors.image}</div>
                ) : null}
              </div>

              <div>
                <label htmlFor="author">Category</label>
                <Field id="category" name="category" type="text" />
                {formik.touched.category && formik.errors.category ? (
                  <div>{formik.errors.category }</div>
                ) : null}
              </div>

              <div>
                <label htmlFor="title">Title</label>
                <Field id="title" name="title" type="text" />
                {formik.touched.title && formik.errors.title ? (
                  <div>{formik.errors.title  }</div>
                ) : null}
              </div>

              <div>
                <label htmlFor="rating">Rate</label>
                <Field id="rating" name="rating" type="number" />
                {formik.touched.rating && formik.errors.rating ? (
                  <div>{JSON.stringify(formik.errors.rating)}</div>
                ) : null}
              </div>

              <button type="submit">Додати товар</button>
            </Form>
          )}
        </Formik>

      </MyModal>
    </>
  );
  
};

export default connect(null, { addProduct })(AddProductForm);
