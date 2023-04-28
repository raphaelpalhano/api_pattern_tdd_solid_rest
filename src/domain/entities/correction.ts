import { Entity } from "../../core/domain/Entity";

type CorrectionProps = {
    grade: number; // notas
    submissionId: string; // relacionamento da submissão do pedido
    createdAt: Date; // quando ocorreu
}

export class Correction extends Entity<CorrectionProps>{
    private constructor(props: CorrectionProps, id?: string){
        super(props, id);
    }

    static create(props: CorrectionProps, id?: string){
        // regra a nível de domínio, n criar correção com notas menor que zero ou maior que 10
        // if(props.grade < 0 || props.grade > 10 || ){
        //     throw new Error('');
        // }
        const correction = new Correction(props, id);

        return correction;
    }
}

