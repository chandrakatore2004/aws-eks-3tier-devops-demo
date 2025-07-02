import 'jest-preset-angular/setup-jest';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { resolveComponentResources } from 'jest-preset-angular';

beforeEach(async () => {
  await resolveComponentResources(TestBed);
});
