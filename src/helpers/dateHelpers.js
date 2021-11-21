export function getAgeFrom(birthDate){
    if(!birthDate){
        return '?';
    }
    const [birthYear, birthMonth, birthDay] = birthDate.split('-').map(value => parseInt(value, 10));
    const today = new Date();

    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth() + 1;
    const todayDay = today.getDate();

    const age = todayYear - birthYear;

    if(birthMonth > todayMonth){
        return age -1;
    }

    if(birthMonth === todayMonth && birthDay > todayDay){
        return age - 1;
    }

    return age;
}
