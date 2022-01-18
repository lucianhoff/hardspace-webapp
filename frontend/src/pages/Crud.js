import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import productsActions from '../redux/actions/productsActions';
import Swal from 'sweetalert2'
const Crud = () => {

    const dispatch = useDispatch();
    const productsList = useSelector(state => state.productsReducer.productsList);

    console.log(productsList)

    useEffect(() => {
        dispatch(productsActions.getAllProducts());
    }, [])

    console.log(productsList)
    
    const deleteItem = (id) => {
        
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )

              productsActions.deleteProduct(id)
                productsActions.getAllProducts()
            } else if (result.dismiss) {
                Swal.fire(
                    'Changes are not saved!',
                    'Your file is saved.',
                    'error'
                  )
            }
          })
    }

    return (
        <>

            <div className="flex justify-center items-center">
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th className="">Name</th>
                            <th className="text-center">Stock</th>
                            <th className="text-center">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="w-full">
                        {productsList.map((product, index) => {
                            return (
                                <tr className="m-5" key={index}>
                                    <td className="text-start">{product.name}</td>
                                    <td className="text-center">{product.stock}</td>
                                    <td className="text-center">
                                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={() => deleteItem(product._id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </>
    );
}

export default Crud;