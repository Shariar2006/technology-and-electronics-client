import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import { FaProductHunt } from "react-icons/fa6";
import { FaAward } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CiDeliveryTruck } from "react-icons/ci";

const TimeLine = () => {
    return (
        <div className='experience bg-blue-400 p-2'>
            <h1 className='text-3xl font-bold text-center text-white my-5' >Why choose us?</h1>
        <VerticalTimeline lineColor='#fff' className='bg-blue-400 '>
            <VerticalTimelineElement className='vertical-timeline-component--work px-5'
            iconStyle={{background:'#60A5FA' , color:'#fff'}}
            icon={<FaProductHunt></FaProductHunt>}
            >
                <h1 className='text-blue-500 text-xl font-semibold'>Product</h1>
                <p className='text-blue-500'>All our products are of superior quality</p>

            </VerticalTimelineElement>

            <VerticalTimelineElement className='vertical-timeline-component--work px-5'
            iconStyle={{background:'#60A5FA', color:'#fff'}}
            icon={<CgProfile></CgProfile>}
            
            >
                <h1 className='text-blue-500 text-xl font-semibold'>Staff</h1>
                <p className='text-blue-500'>We are always committed to meet customer needs</p>

            </VerticalTimelineElement>

            <VerticalTimelineElement className='vertical-timeline-component--work px-5'
            iconStyle={{background:'#60A5FA', color:'#fff'}}
            icon={<FaAward></FaAward>}
            >
                <h1 className='text-blue-500 text-xl font-semibold'>Awards</h1>
                <p className='text-blue-500'>We have received 5 awards for best products</p>

            </VerticalTimelineElement>

            <VerticalTimelineElement className='vertical-timeline-component--work px-5'
            iconStyle={{background:'#60A5FA', color:'#fff', fontWeight:'bold'}}
            icon={<CiDeliveryTruck></CiDeliveryTruck>}
            >
                <h1 className='text-blue-500 text-xl font-semibold'>Delivery</h1>
                <p className='text-blue-500'>Delivery charge is free if you buy more than 3 products</p>

            </VerticalTimelineElement>
        </VerticalTimeline>
            
        </div>
    );
};

export default TimeLine;