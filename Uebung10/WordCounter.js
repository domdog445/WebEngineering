Vue.component('word-counter', {
    data() {
        return {
            value: "",
            countSymbols: 0,
            countLetters: 0,
            countSpace: 0,
            countWords: 0
        }
    },
    methods: {
        CalcCount: function(){

            this.countSymbols =""+ this.value.length;
            this.countLetters = this.countFunc(this.value.split(''), (v) => { return v!==' ' && v!=='\n'});
            this.countSpace = this.countFunc(this.value.split(''), (v) => { return v===' '});
            this.countWords = this.countFunc(this.value.split(' '), (v) => { return v.length>0});
        },
        countFunc: function(val,f)
        {
            var result = 0;
            for(var i = 0; i < val.length;i++)
            {
                if(f(val[i]))
                    result++;
            }
            return result;
        }
    },
    template: `	<div>
                    <textarea  v-model="value" @input="CalcCount" style="width:100%; height:200px;" > </textarea > 
                    <p>Länge Zeichenkette: {{countSymbols}}</p>
                    <p>Anzahl Buchstaben: {{countLetters}}</p>
                    <p>Anzahl Leerzeichen: {{countSpace}}</p>
                    <p>Anzahl Woerter: {{countWords}}</p> 
                </div>`
})