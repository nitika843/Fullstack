import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailIcon from '@mui/icons-material/Mail';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';



const Detail = () => {
    return (
        <div className='container mt-3'>
            <h1 style={{ fontweight: 400 }}>Welcome Harsh Pathak</h1>
            <Card sx={{ maxWidth: 600 }}>
                <div className='add_btn'>
                    <button className="btn btn-primary mx-2"><EditIcon /></button>
                    <button className="btn btn-danger"><RestoreFromTrashIcon /></button>
                </div>
                <CardContent>
                    <div className='row'>
                        <div className='left_view col-lg-6 col-md-6 col-12'>
                            <img src="/profile.png" style={{ width: 50 }} alt="profile" />
                            <h3 className='mt-3'>Name:<span>Harsh Pathik</span></h3>
                            <h3 className='mt-3'>Age:<span>21</span></h3>
                            <p className='mt-3'><MailIcon /> Email:<span>harsh@gmail.co</span></p>
                            <p className='mt-3'><WorkIcon /> Description:<span>webdeveloper</span></p>
                        </div>
                        <div className='right_view col-lg-6 col-md-6 col-12'>
                            <p className='mt-5'><PhoneAndroidIcon /> Mobile:<span>919909090</span></p>
                            <p className='mt-4'><LocationOnIcon /> Location:<span>Delhi</span></p>
                            <p className='mt-4'>Description:<span> Webdeveloper</span></p>
                        </div>
                    </div>
                </CardContent>
            </Card>

        </div>
    )
}
export default Detail;
