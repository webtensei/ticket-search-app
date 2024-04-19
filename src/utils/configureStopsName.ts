export const configureStopsName = (stops:number) => {
    switch (true) {
        case stops === 0:
            return `Без пересадок`
        case stops === 1:
            return `1 пересадка`
        case stops > 1 && stops < 5:
            return `${stops} пересадки`
        case stops >= 5:
            return `${stops} пересадок`
    }
}