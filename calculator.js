      let total = 0;
      let strbuffer = "0";
      let operator = null;

      function calculations() {
          const intBuffer = parseInt(strbuffer); 
          if (operator === "+") {
              total += intBuffer;
          }
          if (operator === "-"){
              total -= intBuffer;
          }
          if (operator === "x"){
              total *= intBuffer;
          }
          if (operator === "÷"){
              total /= intBuffer;
          }
      }

      function makesNumber(value) {
          if (strbuffer === "0") {
              strbuffer = value;
        } else {
              strbuffer += value;
          }
      }

      function makesSymbol(symbol) {
          if (symbol === "C"){
              total = 0;
              strbuffer = "0";
          }
          else if (symbol === "←") {
            if (strbuffer.length === 1) {
                strbuffer = "0";
              } else {
                strbuffer = strbuffer.substring(0, strbuffer.length - 1);
              }
          }
          else if (symbol === "=") {
              let xd = parseInt(strbuffer)
              if (operator === null){
                  return;
              }
              calculations();
              operator = null;
              xd = total;
              strbuffer = xd;
              total = 0;
            }
          else { 
            const xd = parseInt(strbuffer);
            if (total === 0){
                total = xd;
            }
            else {
                calculations();
            }
            operator = symbol;
            strbuffer = "0";
            }
      }

      function setListeners() {
      document.querySelector(".calc-rows").addEventListener("click", function(event) {
        buttonClicked(event.target.innerText);
      });
        }
setListeners();

      function buttonClicked(valueClicked) {
          if (isNaN(parseInt(valueClicked))) {
              makesSymbol(valueClicked);
          } else {
              makesNumber(valueClicked);
          }
        document.querySelector(".result-screen").innerText = strbuffer;
      }