import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function useReset(formula) {
    const person = useSelector((state) => state.teamInfo.teamPerson);
    const days = useSelector((state) => state.teamInfo.teamDays);
    return (eval(formula));
}

function useCheck() {
    const teamName = useSelector((state) => state.teamInfo.teamName);
    const navigate = useNavigate();
    useEffect(() => {
        if (teamName === undefined) {
        alert('尚未輸入隊伍資訊')
            navigate('/', { replace: true });
    }
    }, [teamName])

}

export { useCheck, useReset };