// the function that should accept a day as arguments and the number of hours you slept that night.

const getSleepHours = day => {
  
    switch(day){
      case 'monday':
      return 8;
      break;
  
      case 'tuesday':
      return 8;
      break;
  
      case 'wednesday':
      return 8;
      break;
  
      case 'thursday':
      return 8;
      break;
  
      case 'friday':
      return 8;
      break;
  
      case 'saturday':
      return 10;
      break;
  
      case'sunday':
      return 10;
      break;
  
      default:
      return 'please, choose the day of the week, from monday to friday';
    }
  };
  
  
  const getActualSleepHours = () => 
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday'); 
  
  
   console.log(getSleepHours('monday'));
   console.log(getActualSleepHours());
  
  
  const getIdealSleepHours = () => {
    const idealHours = 6;
    return idealHours * 7;
  };
  
  // console.log(getIdealSleepHours());
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours =  getIdealSleepHours();
  
    if(actualSleepHours === idealSleepHours){
      console.log('perfect amount of sleep');
  
    }else if( actualSleepHours > idealSleepHours ){
      console.log(' You have got' + (actualSleepHours -idealSleepHours)  + 'more hours of sleep this week.');
      
    }else if(actualSleepHours < idealSleepHours){
      console.log('user should get some rest');
    } else{
      console.log('Error! Something went wrong, check your code.');
  
    }
  };
  
  calculateSleepDebt();
  
  // console.log(calculateSleepDebt());