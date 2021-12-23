
    let vConsiderada = vPermitida + (vPermitida * 0.2);

    if(vMotorista <= vPermitida) {
      modal.textContent = 'Sem multa';
    } 
    else if(vMotorista > vPermitida && vMotorista <= vConsiderada) {
      modal.textContent = 'Multa leve';
    } 
    else {
      modal.textContent = 'Multa grave';
    }