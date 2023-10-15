import React from 'react'
import classNames from 'classnames/bind'
import styles from './Product.module.scss';
const cx = classNames.bind(styles)

const CreateProduct = () => {
  return (
    <div className={cx('wrapper')}>
            <div className={cx('wrap')}>
                <h2>Tạo điện thoại mới</h2>
                <form className={cx('form')} 
                // onSubmit={handleSubmit}
                >
                    <h4>Name</h4>
                    <input name='name' placeholder='Tên điện thoại' 
                    // value={formData.name} 
                    // onChange={handleSetValue} 
                    />

                    <h4>Thương hiệu</h4>
                    <select 
                    // value={selectedBrand} 
                    // onChange={handleBrandChange}
                    >
                        <option value=''>Chọn brand</option>
                        {/* {brands.map((brand) => (
                            <option key={brand._id} value={brand._id}>
                                {brand.name}
                            </option>
                        ))} */}
                    </select>

                    <h4>Hình ảnh</h4>
                    <input
                        type='file'
                        id='img_phone'
                        accept='image/*'
                        className={cx('input-file')}
                        // onChange={handleUploadImage}
                    />
                    <label htmlFor='img_phone'>
                      {/* {uploadImageValue} */}
                    </label>
                    {/* {selectedImage && (
                        <img src={selectedImage} alt='Selected' style={{ width: 200, margin: '16px auto 0' }} />
                    )} */}

                    <h4>Thêm option của điện thoại</h4>
                    <div className={cx('phone-option')}>
                        {/* {options.map((option) => (
                            <PhoneOption key={option._id} data={option} />
                        ))} */}
                        <div className={cx('add-option-btn')} 
                        // onClick={handleShowForm}
                        >
                            +
                        </div>
                    </div>

                    {/* <Modal title={'Tạo option mới'} showModal={showOptionForm} closeModal={handleCloseForm}>
                        <div className={cx('form', 'options')}>
                            <h4>Dung lượng</h4>
                            <input
                                name='capacity'
                                placeholder='Dung lượng'
                                // value={formDataOption.capacity}
                                // onChange={handleSetValueOption}
                            />

                            <h4>Màu sắc</h4>
                            <input
                                name='color'
                                placeholder='Màu sắc'
                                value={formDataOption.color}
                                onChange={handleSetValueOption}
                            />

                            <h4>Giá</h4>
                            <input
                                name='price'
                                placeholder='Giá'
                                value={formDataOption.price}
                                onChange={handleSetValueOption}
                            />

                            <h4>Giá gốc</h4>
                            <input
                                name='price_before_discount'
                                placeholder='Giá gốc'
                                value={formDataOption.price_before_discount}
                                onChange={handleSetValueOption}
                            />

                            <h4>Số lượng</h4>
                            <input
                                name='quantity'
                                placeholder='Số lượng'
                                value={formDataOption.quantity}
                                onChange={handleSetValueOption}
                            />

                            <h4>Hình ảnh</h4>
                            <input
                                type='file'
                                id='img_phone_option'
                                accept='image/*'
                                multiple='multiple'
                                className={cx('input-file')}
                                onChange={handleUploadImageOption}
                            />
                            <label htmlFor='img_phone_option'>{uploadImageValueOption}</label>
                            {selectedImageOption.length ? (
                                <img
                                    src={selectedImageOption[0].url}
                                    alt='Selected'
                                    style={{ width: 200, margin: '16px auto 0' }}
                                />
                            ) : (
                                ''
                            )}

                            <button type='submit' onClick={handleSubmitOption}>
                                Tạo option
                            </button>
                        </div>
                    </Modal> */}

                    <h4>Mô tả</h4>
                    {/* <MdEditor
                        className={cx('md-editor')}
                        // plugins={plugins}
                        // renderHTML={(text) => mdParser.render(text)}
                        // value={description}
                        // onChange={handleMdEditorChange(setDescription)}
                        // // imageAccept='image/png, image/gif, image/jpeg, image/bmp, image/x-icon'
                        // onImageUpload={handleUploadImageMdEditor}
                    /> */}

                    <h4>Loại màn hình</h4>
                    <input
                        name='screen_type'
                        placeholder='Loại màn hình'
                        // value={formData.screen_type}
                        // onChange={handleSetValue}
                    />

                    <h4>Độ phân giải</h4>
                    <input
                        name='resolution'
                        placeholder='Độ phân giải'
                        // value={formData.resolution}
                        // onChange={handleSetValue}
                    />

                    <h4>Hệ điều hành</h4>
                    <input
                        name='operating_system'
                        placeholder='Hệ điều hành'
                        // value={formData.operating_system}
                        // onChange={handleSetValue}
                    />

                    <h4>Ram</h4>
                    <input name='memory' placeholder='Bộ nhớ' 
                    // value={formData.memory} 
                    />

                    <h4>Chip</h4>
                    <input name='chip' placeholder='Chip' 
                    // value={formData.chip}  
                    />

                    <h4>Pin</h4>
                    <input name='battery' placeholder='Pin' 
                    // value={formData.battery}  
                    />

                    <h4>Camera sau</h4>
                    <input
                        name='rear_camera'
                        placeholder='Camera sau'
                        // value={formData.rear_camera}
                        // onChange={handleSetValue}
                    />

                    <h4>Camera trước</h4>
                    <input
                        name='front_camera'
                        placeholder='Camera trước'
                        // value={formData.front_camera}
                        // onChange={handleSetValue}
                    />

                    <h4>Wifi</h4>
                    <input name='wifi' placeholder='Wifi'   />

                    <h4>Jack tai nghe</h4>
                    <input
                        name='jack_phone'
                        placeholder='Jack tai nghe'
                        // value={formData.jack_phone}
                        // onChange={handleSetValue}
                    />

                    <h4>Kích thước</h4>
                    <input name='size' placeholder='Kích thước' 
                    // value={formData.size} 
                     />

                    <h4>Trọng lượng</h4>
                    <input name='weight' placeholder='Trọng lượng' 
                    // value={formData.weight} 
                     />

                    <button type='submit'>Tạo điện thoại</button>
                </form>
            </div>
      </div>
  )
}

export default CreateProduct