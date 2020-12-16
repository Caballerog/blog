export class Hero {
    public race: string;
    public armor: string;
    public weapon: string;
    public skills: string[];

    	
	public toString(): string {
        return `Hero:
                   race=${this.race ? this.race : 'empty'}
                   armor=${this.armor ? this.armor: 'empty'}
                   weapon=${this.weapon ? this.weapon: 'empty'}
                   skills=${this.skills ? this.skills: 'empty'}
                 `;
	}

}