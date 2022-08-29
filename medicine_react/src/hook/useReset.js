import { useSelector } from 'react-redux';

export default function useReset(formula) {
    const person = useSelector((state) => state.teamInfo.teamPerson);
    const days = useSelector((state) => state.teamInfo.teamDays);
    return (eval(formula));
}