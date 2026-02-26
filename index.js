
      let values = [];
      var fillz = document.getElementById("fillz");
      var enter = document.getElementById("enter");
      var alclear = document.getElementById("alclear");
      var clearzz = document.getElementById("clearz");
      function enterz() {
        enter.disabled = false;
        alclear.disabled = false;
        clearzz.disabled = false;
        alclear.style.cssText = "cursor: pointer";
        clearzz.style.cssText = "cursor: pointer";
        enter.style.cssText = "background:#18be31; cursor: pointer";
      }
      function dis_enter() {
        enter.disabled = true;
        clearzz.disabled = true;
        alclear.disabled = true;
        alclear.style.cssText = "cursor: not-allowed";
        clearzz.style.cssText = "cursor: not-allowed";
        enter.style.cssText = "background:#444;cursor: not-allowed";
      }

      function num(a) {
        const ops =["+", "-", "*", "/", "."];
        const last = values.at(-1);

        // with the help of chat gpt start  
        if (ops.includes(a)) {
          if (!last || ops.includes(last) || values == Infinity) return;
        }
        // end       

       if (values == Infinity) {
          values = [];
        }

        values.push(a);
        fillz.innerText = values.join("");
        enterz();
        const first = values[0];
        console.log(first);
      }

      const enterValue = () => {
        const result = eval(values.join(""));
        fillz.innerText = result;
        values = [result];
      };

      const clearz = () => {
        values.pop();
        const result = values.join("");
        fillz.innerText = result;
        let allc = values.length;
        if (allc === 0) {
          dis_enter();
        }
      };

      const allclearz = () => {
        // let allc = values.length;
        // for (i = 0; i < allc; i++) {
        //   values.pop();
        // }
        values = [];
        fillz.innerText = values;
        dis_enter();
      };
    