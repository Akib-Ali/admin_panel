import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CCardImage,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const Tables = () => {
  const [blogList, setBlogList] = useState([])

  useEffect(() => {
    getBlog()
  }, [])
  const getBlog = async () => {
    let result = await fetch('http://localhost:8005/blog-list')
    result = await result.json()
    setBlogList(result)
  }
  console.log(blogList, `rESCIVED BLOG LIST`)
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Table</strong> <small>Hoverable rows</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Use <code>hover</code> property to enable a hover state on table rows within a{' '}
              <code>&lt;CTableBody&gt;</code>.
            </p>
            <DocsExample href="components/table#hoverable-rows">
              <CTable hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Picture</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Blog Category</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Blog Title</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Blog Slug</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {/* <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Marked</CTableDataCell>
                    <CTableDataCell>Ottoyyyy</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                  </CTableRow> */}
                  {blogList.map((elem, index) => {
                    return (
                      <CTableRow key={elem.id}>
                        <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                        <CTableDataCell>
                          <CCardImage src={`/uploads/${elem.image}`} height="50px" width="20px" />
                        </CTableDataCell>
                        <CTableDataCell>{elem.title}</CTableDataCell>
                        <CTableDataCell>{elem.category}</CTableDataCell>
                        <CTableDataCell>{elem.blog}</CTableDataCell>
                      </CTableRow>
                    )
                  })}
                </CTableBody>
              </CTable>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Tables
