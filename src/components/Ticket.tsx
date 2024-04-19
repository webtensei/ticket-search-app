import {ITicket} from "../types/Ticket.ts";
import Card from "./ui/card.tsx";
import {configureStopsName} from "../utils/configureStopsName.ts";
import blackPlane from '../assets/black-plane.png'
import {formateDate} from "../utils/convertDate.ts";
import BuyerButton from "./BuyerButton.tsx";
import {configurePrice} from "../utils/configurePrice.ts";
import {Currency} from "../types/Currency.ts";

const Ticket = ({data, currency}: { data: ITicket, currency:Currency }) => {
    return (
        <Card data-bid="single-ticket" className='flex xs:flex-col flex-col-reverse md:flex-row gap-4'>
            <div data-bid="ticket-price" className='p-4'>
                <BuyerButton>Купить <br/> за {configurePrice(data.price, currency)}</BuyerButton>
            </div>
            <div data-bid="ticket-info" className='p-4'>
                <div data-bid="ticket-time" className='gap-2 flex align-middle items-center justify-center'>
                    <time data-bid="departure-time"
                          className=' text-3xl sm:text-5xl text-gray-500 sm:min-w-[124px] '>{data.departure_time}</time>
                    <div data-bid="air-stops" className='text-gray-400'>
                        <p className='px-4 min-w-34 max-w-36'>{configureStopsName(data.stops)}</p>
                        <span className='flex flex-row items-center'>
                            <hr className='w-full border-none h-0.5 bg-gray-200'/><img alt='Самолет прилетел'
                                                                                       src={blackPlane}/>
                        </span>
                    </div>
                    <time data-bid="arrival-time"
                          className=' text-3xl sm:text-5xl text-gray-500 sm:min-w-[124px] text-right'>{data.arrival_time}</time>
                </div>
                <div data-bid="ticket-details" className='w-full flex justify-between'>
                    <div data-bid='departure-datetime'>
                        <p className='font-medium'>{`${data?.origin}, ${data?.origin_name}`}</p>
                        <time className='text-gray-400'>{formateDate(data.departure_date)}</time>
                    </div>
                    <div data-bid='arrival-datetime' className='text-right'>
                        <p className='font-medium'>{`${data?.destination}, ${data?.destination_name}`}</p>
                        <time className='text-gray-400'>{formateDate(data.arrival_date)}</time>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default Ticket;