import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementCard extends Schema.Component {
  collectionName: 'components_element_cards';
  info: {
    displayName: 'Card';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    subdescription: Attribute.Text;
  };
}

export interface ElementFeatures extends Schema.Component {
  collectionName: 'components_element_features';
  info: {
    displayName: 'features';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ElementUsCard extends Schema.Component {
  collectionName: 'components_element_us_cards';
  info: {
    displayName: 'us_card';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.String;
  };
}

export interface HomeDoIt extends Schema.Component {
  collectionName: 'components_home_do_its';
  info: {
    displayName: 'Do it';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    do_card: Attribute.Component<'element.us-card', true>;
  };
}

export interface HomeLogo extends Schema.Component {
  collectionName: 'components_home_logos';
  info: {
    displayName: 'Logo';
    description: '';
  };
  attributes: {
    logo_title: Attribute.String;
    logo_description: Attribute.Text;
    logo: Attribute.Media<'images', true>;
  };
}

export interface HomeModule extends Schema.Component {
  collectionName: 'components_home_modules';
  info: {
    displayName: 'Module';
    description: '';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface HomeSimplified extends Schema.Component {
  collectionName: 'components_home_simplifieds';
  info: {
    displayName: 'simplified';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    feature: Attribute.Component<'element.features', true>;
  };
}

export interface HomeUseCase extends Schema.Component {
  collectionName: 'components_home_use_cases';
  info: {
    displayName: 'use case';
  };
  attributes: {
    heading: Attribute.String;
    case_card: Attribute.Component<'element.us-card', true>;
  };
}

export interface HomeWhyRubicr extends Schema.Component {
  collectionName: 'components_home_why_rubicrs';
  info: {
    displayName: 'why rubicr';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    card: Attribute.Component<'element.card', true>;
  };
}

export interface HomeWhyUs extends Schema.Component {
  collectionName: 'components_home_why_uses';
  info: {
    displayName: 'Why us';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    us_card: Attribute.Component<'element.us-card', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'element.card': ElementCard;
      'element.features': ElementFeatures;
      'element.us-card': ElementUsCard;
      'home.do-it': HomeDoIt;
      'home.logo': HomeLogo;
      'home.module': HomeModule;
      'home.simplified': HomeSimplified;
      'home.use-case': HomeUseCase;
      'home.why-rubicr': HomeWhyRubicr;
      'home.why-us': HomeWhyUs;
    }
  }
}
