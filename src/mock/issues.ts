const issues: IIssueReceive[] = [
  {
    id: 1,
    category: {
      id: 3,
      label: 'Rechtschreibfehler',
      description: 'Zur Kategorisierung von Rechtschreibfehlern in Medien',
    },
    title: 'Rechtschreibfehler',
    description: 'Rechtschreibfehler im Skript auf Seite 121',
    course: {
      id: 2,
      code: 'DWLML-01',
      title: 'Industrielle Softwareentwicklung',
      tutor: {
        id: 2,
        first_name: 'Michael',
        last_name: 'Testtutor',
        email: 'michael@test.tutor',
      },
    },
    created_from: {
      id: 2,
      first_name: 'Conroy',
      last_name: 'Jones',
    },
    created_at: new Date(),
    updated_at: new Date(),
  },
];
