import { Submission } from "../../domain/entities/submission"
import { ChallengesRepository } from "../repositories/ChallengesRepository";
import { StudentRepository } from "../repositories/StudentsRepository";

type CreateChallengeSubmissionRequest = {
    studentId: string;
    challengeId: string;
}

export class CreateChallengeSubmission{

    constructor(private studentsRepository: StudentRepository, private challengeRepository: ChallengesRepository){

    }

    async execute({studentId, challengeId}: CreateChallengeSubmissionRequest){
        const student = await this.studentsRepository.findById(studentId);

        if(!student){
            throw new Error('Student doses not exists.');
        }

       const challenge = await this.challengeRepository.findById(challengeId);


       if(!challenge){
        throw new Error('Challenge doses not exists.');
    }


        const submission = Submission.create({
            studentId,
            challengeId,
        })

        return submission;
    }

}