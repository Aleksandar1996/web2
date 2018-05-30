import React from 'react';
import {Polje} from './polje';
import './index.css';


export class Matrica extends React.Component
{
    constructor(props)
    {
        super(props);
        this.slike=new Array(5);
        this.matra=new Array(4);
        //this.matra1=new Array(4);
        this.Inicijalizacija=this.Inicijalizacija.bind(this);
        //this.Kreiranje=this.Kreiranje.bind(this);
        this.Inicijalizacija();
        
    }
    render()
    {
        return(
            <div>
                <div className='red'>
                <Polje slika={this.matra[0][0]} />
                <Polje slika={this.matra[0][1]} />
                <Polje slika={this.matra[0][2]} />
                <Polje slika={this.matra[0][3]} />
                </div>
                <div className='red'>
                <Polje slika={this.matra[1][0]} />
                <Polje slika={this.matra[1][1]} />
                <Polje slika={this.matra[1][2]} />
                <Polje slika={this.matra[1][3]} />
                </div>
                <div className='red'>
                <Polje slika={this.matra[2][0]} />
                <Polje slika={this.matra[2][1]} />
                <Polje slika={this.matra[2][2]} />
                <Polje slika={this.matra[2][3]} />
                </div>
                <div className='red'>
                <Polje slika={this.matra[3][0]} />
                <Polje slika={this.matra[3][1]} />
                <Polje slika={this.matra[3][2]} />
                <Polje slika={this.matra[3][3]} />
                </div>
            </div>
        );
    }
    /*pokusao sam da stampam matricu na drugi nacin(preko ove funkcije i onda pozivom ove funkcije u metodi render),
    ali nakon promene stanja(uspesne(provereno u browser-u) komponenta Polje se nije re-renderovala, cak ni pozivom funkcije
    this.forceUpdate)--Posle dosta vremena debagiranja, odlucio sam da rucno napravim matricu prosledjujuci link ka slici*/
    /*Kreiranje()
    {
        return this.matra.map((item)=>item.map((item)=>item.StampajSliku()));
    }*/
    Inicijalizacija()
    {
        this.slike[0]='https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg';
        this.slike[1]='https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg';
        this.slike[2]='https://cdn.pixabay.com/photo/2018/04/30/18/09/stork-3363503__340.jpg';
        this.slike[3]='https://cdn.pixabay.com/photo/2018/05/21/14/42/ara-3418427__340.jpg';
        this.slike[4]='https://cdn.pixabay.com/photo/2018/05/07/10/48/husky-3380548_960_720.jpg';
        this.slike[5]='https://cdn.pixabay.com/photo/2018/05/24/09/39/religion-3426159__340.jpg';
        this.slike[6]='https://cdn.pixabay.com/photo/2018/01/09/22/51/rose-3072698__340.jpg';
        this.slike[7]='https://cdn.pixabay.com/photo/2017/11/06/13/45/cap-2923682__340.jpg';
        this.slike[8]='https://cdn.pixabay.com/photo/2017/02/12/14/00/justice-2060093__340.jpg';
        this.slike[9]='https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074__340.jpg';
        this.slike[10]='https://cdn.pixabay.com/photo/2018/03/22/19/29/tulips-3251607__340.jpg';
        this.slike[11]='https://cdn.pixabay.com/photo/2018/05/02/23/00/tree-3369950__340.jpg';
        this.slike[12]='https://cdn.pixabay.com/photo/2018/05/21/19/15/horse-3419146__340.jpg';
        this.slike[13]='https://cdn.pixabay.com/photo/2018/02/28/21/59/rose-3189198__340.jpg';
        this.slike[14]='https://cdn.pixabay.com/photo/2018/01/01/01/57/woman-3053492__340.jpg';
        this.slike[15]='https://cdn.pixabay.com/photo/2018/01/03/17/05/coast-3058728__340.jpg';
        this.slike[16]='https://cdn.pixabay.com/photo/2018/01/21/19/55/snow-3097418__340.jpg';
        this.slike[17]='https://cdn.pixabay.com/photo/2018/02/06/22/43/painting-3135875__340.jpg';
        this.slike[18]='https://cdn.pixabay.com/photo/2018/02/01/12/51/mammal-3123179__340.jpg';
        this.slike[19]='https://cdn.pixabay.com/photo/2018/02/27/18/17/road-3186188__340.jpg';
        this.slike[20]='https://cdn.pixabay.com/photo/2016/11/08/05/22/ancient-1807526__340.jpg';
        this.slike[21]='https://cdn.pixabay.com/photo/2015/09/22/21/35/woman-952506__340.jpg';
        this.slike[22]='https://cdn.pixabay.com/photo/2017/08/24/22/37/gyrfalcon-2678684__340.jpg';
        this.slike[23]='https://cdn.pixabay.com/photo/2018/05/22/17/33/zoo-3421965__340.jpg';
        this.slike[24]='https://cdn.pixabay.com/photo/2017/08/14/17/12/cows-2641195__340.jpg';
        for (let i = 0; i < 4; i++) {
            this.matra[i] = new Array(4);
            //this.matra1[i] = new Array(4);
        }
        for (let i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++)
            {
                this.matra[i][j]=" ";//<Polje slika={}/>;//tako treba da se dodeli
            }
        }
        var n1=0;
        var n2=0;
        while(n1<8)
        {
            while(n2<2)
            {
                let h=Math.floor((Math.random()*100)%4);
                let h1=Math.floor((Math.random()*100)%4);
                //let a=this.matra[h][h1].ImaSliku();proveravas dal je instanciran taj element matrice pa onda
                if(this.matra[h][h1]===" ")
                {
                    //this.matra[h][h1]=<Polje slika={this.slike[n1]} />//.PostaviSliku(this.slike[n1]);
                    //this.matra[h][h1].PostaviSliku();
                    this.matra[h][h1]=this.slike[n1];
                    n2++;
                }
            }
            n2=0;
            n1++;
        }
    }
}