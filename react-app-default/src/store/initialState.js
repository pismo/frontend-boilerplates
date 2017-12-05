
const initialState = {
  user: {
    email: '',
    token: '',
    tenant: '',
    accounts: [],
    roles: [],
    isCustomer: false,
  },
  call: {
    onCall: false,
    currentProtocol: null,
    init: null,
    timerCount: null,
    respectiveCustomer: {
      customerId: null,
      accountId: null,
    },
  },
  credentials: {
    email: '',
    token: '',
    tenant: '',
    roles: [],
    jwt: {},
    protocol: null,
  },
  customers: {
    results: [],
    displayCount: 25,
    selectedResult: 0,
    isLoading: false,
    isFetching: false,
  },
  customer: {
    account: {},
    entity: {},
    program: {},
    programs: [],
    contract: {},
    latestAuthorizations: {
      isLoading: false,
      items: [],
    },
    isAvatarLoading: false,
    avatar: null,
  },
  programSelector: {
    isOpen: false,
  },
  statements: {
    months: [],
    isScrolling: false,
    isLoading: true,
    selectedMonth: {
      index: null,
      statement: {
        id: null,
      },
    },
    currentStatement: {
      totals: {
        main: {},
        list: [],
        exchange_rate: null,
        international: {},
      },
      transactions: {
        isLoading: true,
        error: false,
        errorMsg: null,
        currentPage: null,
        items: [],
        groups: [],
        pages: null,
        perPage: null,
        totalItems: null,
        selectedTransaction: {
          index: null,
          id: null,
        },
      },
    },
  },
  transaction: {
    isLoading: true,
    error: false,
    errorMsg: null,
    transaction: {},
    authorization: {},
    customer: {},
    merchant: {},
  },
  dispute: {
    isLoading: false,
    isSubmitting: false,
    selectedCategory: {
      reasons: [],
    },
    selectedReason: null,
    comment: '',
  },
  payment: {
    isOpen: false,
    amountInput: '',
    sliderInput: 0,
    isFetchingTotalDue: true,
    totalDue: {
      consolidated: {},
    },
  },
  ui: {
    language: null,
    currentRoute: null,
    isMobile: null,
    isMobileKeyboardVisible: null,
    initialDimensions: {
      width: null,
      height: null,
    },
    currentDimensions: {
      width: null,
      height: null,
    },
  },
  profileParams: {
    viewer: 'account',
    menuFixed: false,
    editing: {
      id: null,
      prevValue: 0,
      nextValue: 0,
    },
    dueDateAvaliables: [],
    options: {
      amount: 0,
      available: 0,
      available_monthly: 0,
      available_total_installment: 0,
      available_withdrawal: 0,
      best_transaction_day: 0,
      credits: 0,
      current_balance: 0,
      due_date: 0,
      event_date_hour: 0,
      last_statement: 0,
      minimum_payment: 0,
      monthly: 0,
      total: 0,
      total_installment: 0,
      withdrawal: 0,
    },
    parameters: [],
  },
  cards: {
    list: [],
    groups: [],
    isLoading: false,
    addNewCardBtnPosition: null,
  },
  newCard: {
    form: {
      name: '',
      printed_name: '',
      document_number: '',
      gender: '',
      birth_date: '',
    },
    isConfirmationOpen: false,
    isValid: false,
    isSubmitting: false,
    outcome: null,
  },
  card: {
    params: [],
    blockCardBtnPosition: null,
    isLoading: false,
  },
  cardUnblock: {
    isOpen: false,
    isSubmitting: false,
    outcome: null,
  },
  cardStatusChange: {
    isOpen: false,
    isSubmitting: false,
    outcome: null,
    statuses: [],
    selectedStatus: '',
  },
  toast: {
    isVisible: false,
    message: null,
    style: null,
  },
  limitProposal: {
    status: {},
    isOpen: false,
    nextLimit: 0,
    nextLimitMasked: '0,00',
    isLoading: true,
    isSubmitting: false,
    outcome: null,
    selectedReason: '',
  },
  attendanceNotes: {
    isVisible: false,
    notes: {},
  },
  callHistory: {
    current_page: 0,
    per_page: 25,
    next_page: null,
    items: [],
    isLoading: false,
    isLoadingMore: false,
    selectedProtocol: null,
  },
  callDetails: {
    has_notes: null,
    initial_date: null,
    protocol: null,
    status: null,
    user: null,
    events: [],
    isLoadingEvents: false,
  },
}

export default initialState
