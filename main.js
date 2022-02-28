let number = prompt('Введите цифру')
switch(number){
	case '1':
		console.log('')
    alert('один')
		break;
    	case '2':
		console.log('')
    alert('Два')
		break;
    	case '3':
		console.log('')
    alert('Три')
		break;
    	case '4':
		console.log('')
    alert('Четыре')
		break;
    	case '5':
		console.log('')
    alert('Пять')
		break;
    	case '6':
		console.log('')
    alert('Шесть')
		break;
    	case '7':
		console.log('')
    alert('Семь')
		break;
    	case '8':
		console.log('')
    alert('Восемь')
		break;
    	case '9':
		console.log('')
    alert('Девять')
		break;
	default:
		console.log('error')
    alert('ошибка')
}


let age = prompt('Введите ваш возраст' )
	if (age <= 13){

     
		alert('Шрек')
	}
	else if ( age <= 17 && age >= 14) {
		alert('Гарри Поттер')
	}
  else if ( age >= 18) {
		alert('Аниме')
	}

//   Задание № 3
// Сделать последовательное упрощение к булевым велечинам.
    // (2 < 3) && (3 > 4) || true             = (false)||true = false
 
    // !true && (!true || 100 !=  5 * 5)       = false && (false || true) = false

    // ('123' == 123) || ((10 <= 10) && (' ' === false))      = true || true && false = false
