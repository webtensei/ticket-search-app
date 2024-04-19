import {useState} from "react";
import data from '../__DATA__/tickets.json'
import {sortByPrice} from "../utils/sortByPrice.ts";
import Ticket from "../components/Ticket.tsx";
import FilterWidget from "../components/FilterWidget.tsx";
import {Currency} from "../types/Currency.ts";
import {ITicket} from "../types/Ticket.ts";

const BuyerPage = () => {
    const [filteredData, setFilteredData] = useState<ITicket[]>(sortByPrice(data.tickets))
    const [currency, setCurrency] = useState<Currency>(Currency.RUB)

    function modifyTicketData(modifiedArray: ITicket[]) {
        setFilteredData(sortByPrice(modifiedArray))
    }

    return (
        <div data-bid="buyer-page-layout" className='flex flex-col xl:mx-auto  lg:flex-row gap-6'>
            <div data-bid="filters" className='flex-1 lg:max-w-fit'>
                <FilterWidget currentState={data.tickets} currency={currency} setCurrency={setCurrency} modifyFunc={modifyTicketData}/>
            </div>
            <div data-bid="ticket-list" className='flex flex-col gap-6 w-auto h-[600px] lg:max-w-fit flex-grow overflow-y-auto pr-2'>
                {
                    filteredData.map((ticket) => (
                        <Ticket currency={currency} data={ticket} key={ticket.origin + ticket.destination + ticket.price}/>
                    ))
                }
            </div>
        </div>
    );
};

export default BuyerPage;