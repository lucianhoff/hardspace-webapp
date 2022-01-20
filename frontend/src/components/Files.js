import React, { useEffect, useState } from 'react';
import usersActions from '../redux/actions/usersActions'
import { FaRegFolderOpen } from "react-icons/fa";
import { BsCloudUpload } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { connect } from 'react-redux'


 function Files(props ) {
    const [open, setOpen] = React.useState(false);
    const [fileSelected, setFile] = useState()
    const [filesList, setFileList] = useState([])
    const [reload, setReload] = useState(false)
    const [itemId, setItemId] = useState()

    const fileList = async () => {
       
        await props.getFiles()
            .then(response => {
                setFileList(response.user.data.response.files)
            })
    }

    const upload = async (e) => {
        e.preventDefault()
        let file = await e.target.files[0]
        setFile(file)
        
        const formData = new FormData()
        
        formData.append('file', file)

        await props.uploadFile(formData)
            .then(response => {
                if (response.success) {
                    alert("Uploaded successfully!")
                }
                else { alert("File already uploaded") }
            })
        setReload()
    }

    const deleteItem = async (event) => {
        let { id } = event.target
        
        await props.deleteFile(id)
            .then(response => {
                alert(response.response.mensaje)
            })
        setReload()
    }


  
    const handleOpen = () => {
        open ? setOpen(false) : setOpen(true)
    };

    return (
        <div>
            <label>
                <input class="hidden cursor-pointer" type="file" onChange={upload} id="icon-button-file" style={{ display: 'none', }} multiple/>
              <FaRegFolderOpen/>
            </label>
            {open &&
                <div className="cardFiles">
                    <div className="cardInput">
                        <div>
                            <input type="file" onChange={upload} id="icon-button-file" style={{ display: 'none', }} multiple/>
                            {/* <label htmlFor="icon-button-file">
                                 <button variant="contained" component="span" starticon={< BsCloudUpload />}>
                                    Upload
                                </button> 
                            </label> */}
                        </div>
                        <div>
                            {(!filesList)
                                ? (<div>NO UPLOADED FILES</div>)
                                : (filesList.map(item =>
                                    <div key={item.id}>
                                        <div>
                                            <img
                                                src={process.env.PUBLIC_URL + `/files/${item.id}`} alt={item.name} />
                                        </div>
                                        <div>
                                            {item.name}
                                        </div>
                                        <div>
                                            <button id={item.id} onClick={deleteItem} >
                                                <RiDeleteBin6Line />
                                            </button>
                                        </div>
                                    </div>)
                                )}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

const mapDispatchToProps = {

  uploadFile: usersActions.uploadFile,
  deleteFile: usersActions.deleteFile,
  getFiles: usersActions.getFiles 
}

export default connect(null, mapDispatchToProps)(Files)
