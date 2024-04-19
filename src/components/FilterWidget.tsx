import Card from "./ui/card.tsx";
import {ITicket} from "../types/Ticket.ts";
import {ButtonGroup, ButtonGroupItem} from "./ui/button-group.tsx";
import {Currency} from "../types/Currency.ts";
import {useEffect, useState} from "react";
import {configureStopsName} from "../utils/configureStopsName.ts";
import Select from "./ui/select.tsx";

const FilterWidget = ({currentState, modifyFunc, currency, setCurrency}: {
    currentState: ITicket[],
    currency: Currency,
    setCurrency: (currency:Currency) => void,
    modifyFunc: () => void
}) => {
    const [uniqueStopsSet, setUniqueStopsSet] = useState<Set<number>>(new Set());
    const [activeStops, setActiveStops] = useState<number[]>([])

    const handleCurrencyChange = (currency: Currency) => {
        setCurrency(currency);
    }
    const handleSelectorChange = (stops: number) => {
        activeStops.includes(stops)
            ? setActiveStops((prevStops) => prevStops.filter((stop) => stop !== stops))
            : setActiveStops(prevState => [...prevState, stops])
    }

    useEffect(() => {
        const stopsSet = new Set<number>(currentState.map(ticket => ticket.stops));
        const sortedStops = Array.from(stopsSet).sort((a, b) => a - b);
        setUniqueStopsSet(new Set(sortedStops));
    }, [currentState]);

    return (
        <Card>
            <div data-bid="currency-select">
                <p className='uppercase text-gray-500 font-bold mb-4'>Валюта</p>
                <ButtonGroup>
                    {Object.values(Currency).map((el) => (
                        <ButtonGroupItem key={el} selected={el === currency} value={el}
                                         onClick={() => handleCurrencyChange(el)}>{el}</ButtonGroupItem>
                    ))}
                </ButtonGroup>
            </div>
            <div data-bid="stops-select" className='mt-8 flex flex-col'>
                <p className='uppercase text-gray-500 font-bold mb-4'>Количество пересадок</p>
                {Array.from(uniqueStopsSet).map((stops) => (
                    <Select onChange={() => {
                        handleSelectorChange(stops)
                    }} checked={activeStops.includes(stops)} key={stops} value={stops}
                            label={configureStopsName(stops)}/>
                ))}
            </div>
        </Card>
    );
};

export default FilterWidget;