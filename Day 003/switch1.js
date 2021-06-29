let a = parseInt(prompt("Enter the value: "));

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    case 6:
        alert( 'Extremely big' );
    break;
  default:
    alert( "I don't know such values" );
}