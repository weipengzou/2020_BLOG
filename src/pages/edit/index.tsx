import React, { useState, useEffect } from 'react'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { Button } from 'antd'
import './edit.less'
interface Props {}

const Edit = (props: Props) => {
	const [editVal, setEditVal] = useState('')
	useEffect(() => {
		console.log('change!')
		setEditVal('<p>Hello from CKEditor 5!</p>')
	}, [editVal])

	return (
		<>
			<div className='title'>Edit</div>
			<CKEditor
				editor={ClassicEditor}
				data={editVal}
				disabled={false}
				onBlur={(e: any, edit: any) => {
					setEditVal(edit.getData())
				}}
			/>
			<Button onClick={() => console.log('提交', editVal)}>提交</Button>
		</>
	)
}

export default Edit
