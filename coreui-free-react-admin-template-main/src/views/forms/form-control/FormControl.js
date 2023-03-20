import React, { useState } from 'react'
import axios from 'axios'

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const FormControl = () => {
  const [image, setImage] = useState('')
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [category, setCategory] = useState('')
  const [blog, setBlog] = useState('')

  console.log({ image: image, title: title, slug: slug, category: category, blog: blog })
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(`clicked handlesubmit success`)
    var formData = new FormData()
    formData.append('photo', image)
    formData.append('title', title)
    formData.append('slug', slug)
    formData.append('category', category)
    formData.append('blog', blog)
    const config = {
      headers: {
        'Content-Type': 'multiple/form-data',
      },
    }
    const res = await axios.post('/blog-post', formData, config)
    console.log(res)
  }
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Form Control</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/form-control">
              <CForm>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Image</CFormLabel>
                  <CFormInput
                    type="file"
                    id="exampleFormControlInput1"
                    name="image"
                    onChange={(e) => setImage(e.target.files)}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput2">Title</CFormLabel>
                  <CFormInput
                    type="text"
                    id="exampleFormControlInput1"
                    placeholder="Blog title name"
                    name="title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput3">Slug</CFormLabel>
                  <CFormInput
                    type="text"
                    id="exampleFormControlInput1"
                    placeholder="Blog Slug name"
                    name="slug"
                    onChange={(e) => setSlug(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Category</CFormLabel>
                  <CFormInput
                    type="text"
                    id="exampleFormControlInput1"
                    placeholder="Blog Category name"
                    name="category"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlTextarea1">Blog Text Area</CFormLabel>
                  <CFormTextarea
                    id="exampleFormControlInput1"
                    rows="3"
                    name="blog"
                    onChange={(e) => setBlog(e.target.value)}
                  />
                </div>
                <div>
                  <CButton onClick={handleSubmit}>Add New Blogsaaa</CButton>
                </div>
              </CForm>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default FormControl
