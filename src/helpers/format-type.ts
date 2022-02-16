

const formatType = (type: string): string => {
    let color: string;
    let boxShadow:string;

    switch (type) {
      
      case "Feu":
        
        color = '#be4141df';
        break;
      case "Eau":
        color = "#416dbedf";
        break;
      case "Plante":
        color = "#41be4bdf" ;
        
        break;
      case "Insecte":
        color = "#7ed193df";
        break;
      case "Normal":
        color = "#4166be5f";
        break;
      case "Vol":
        color = "blue";
        break;
      case "Poison":
        color = "purple";
        break;
      case "Fée":
        color = "#c532be93";
        break;
      case "Psy":
        color = "#4e024a92";
        break;
      case "Electrik":
        color = "#d1dd27b0";
        break;
      case "Combat":
        color = "orange";
        break;
      default:
        color = "grey";
        break;
    }

    return color
  };
export default formatType;