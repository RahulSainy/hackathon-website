import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormArray } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent {
  teamForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.teamForm = this.fb.group({
      teamLeaderName: ['', Validators.required],
      contactNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      semester: ['', Validators.required],
      department: ['', Validators.required],
      collegeName: ['', Validators.required],
      teamMembers: this.fb.array([
        this.createTeamMemberFormGroup(),
        this.createTeamMemberFormGroup(),
        this.createTeamMemberFormGroup()
      ]),
      mentorName: ['', Validators.required],
      mentorNumber: ['', Validators.required],
      paymentId: ['', Validators.required]
    });
  }

  ngOnInit() {}

  createTeamMemberFormGroup(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      number: ['', Validators.required],
      collegeName: ['', Validators.required]
    });
  }

  get teamMembers() {
    return this.teamForm.get('teamMembers') as FormArray;
  }

  addTeamMember() {
    this.teamMembers.push(this.createTeamMemberFormGroup());
  }

  removeTeamMember(index: number) {
    this.teamMembers.removeAt(index);
  }

  submitForm() {
    if (this.teamForm.valid) {
      // Handle form submission
      console.log(this.teamForm.value);
    } else {
      // Handle invalid form submission
    }
  }
}