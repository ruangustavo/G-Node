export type IncomingPacket =
  | "LegacyBannerPublicKey"
  | "ClubAndSecurityLevels"
  | "Ok"
  | "Film"
  | "UserObject"
  | "WalletBalance"
  | "ScrSendUserInfo"
  | "IsFirstLoginOfDay"
  | "ScrSendKickbackInfo"
  | "Token"
  | "MessengerInit"
  | "FriendListUpdate"
  | "FriendListFragment"
  | "CloseConnection"
  | "OpenConnectionConfirmation"
  | "NoLoginPermission"
  | "RoomExitReason"
  | "DeleteFlatResult"
  | "Chat"
  | "Whisper"
  | "Shout"
  | "FloodControl"
  | "UsersInRoom"
  | "UserLoggedOut"
  | "StackingHeightmap"
  | "ActiveObjects"
  | "Error"
  | "Status"
  | "UserBanned"
  | "PetNameApproved"
  | "PetStatusUpdate"
  | "PetLevelUpdate"
  | "YouAreController"
  | "YouAreNotController"
  | "NoSuchFlat"
  | "Items"
  | "FlatProperty"
  | "YouAreOwner"
  | "ItemData"
  | "ServiceIsClosed"
  | "Ping"
  | "RegOk"
  | "PickedUpPetFromRoom"
  | "FlatCreated"
  | "SubFlatCreated"
  | "PickedUpAllItems"
  | "DoorFlat"
  | "DoorOtherEndDeleted"
  | "DoorNotInstalled"
  | "PurchaseError"
  | "CatalogUrl"
  | "PurchaseOk"
  | "NotEnoughBalance"
  | "RoomReady"
  | "YouAreModerator"
  | "PhTickets"
  | "PhNoTickets"
  | "JumpData"
  | "JumpDataSaved"
  | "UserNotFound"
  | "JumpsForUser"
  | "GotoJumpingPlace"
  | "OwnerPresence"
  | "AddItem"
  | "RemoveItem"
  | "UpdateItem"
  | "StuffDataUpdate"
  | "DoorOut"
  | "DiceValue"
  | "DoorbellRinging"
  | "DoorIn"
  | "ActiveObjectAdd"
  | "ActiveObjectRemove"
  | "ActiveObjectUpdate"
  | "InventoryAddOrUpdateFurni"
  | "InventoryRemoveFurni"
  | "InventoryInvalidate"
  | "TradeYouAreNotAllowed"
  | "TradeOtherNotAllowed"
  | "TradeOpen"
  | "TradeOpenFail"
  | "TradeNoTradeOpen"
  | "TradeNoSuchItem"
  | "TradeItems"
  | "TradeAccept"
  | "TradeClose"
  | "TradeConfirmation"
  | "TradeCompleted"
  | "Trigger"
  | "TeleportRelinkResponse"
  | "FurniRentOrBuyoutOffer"
  | "DonationSettings"
  | "DonateResult"
  | "PhLiftDoorOpen"
  | "PhLiftDoorClose"
  | "PhTicketsBuy"
  | "PhJumpingPlaceOk"
  | "CatalogIndex"
  | "CatalogPage"
  | "MemberInfo"
  | "PresentOpen"
  | "FlatPasswordOk"
  | "NewBuddyRequest"
  | "MessengerNewConsoleMessage"
  | "MessengerRoomInvite"
  | "SystemBroadcast"
  | "InventoryPush"
  | "PostItPlaced"
  | "MemberRoom"
  | "ServiceClosed"
  | "RoomUsers"
  | "NewUnit"
  | "UnitRemove"
  | "UnitUpdated"
  | "SystemDown"
  | "SystemOpened"
  | "UserProfile"
  | "UserMatch"
  | "CloseVotingDialog"
  | "ModeratorCaution"
  | "UnitClosed"
  | "ModeratorMessage"
  | "AgeCheckResult"
  | "TrackingRequest"
  | "ReregistrationRequired"
  | "AccountUpdateStatus"
  | "RoomAd"
  | "UserCreditTransactions"
  | "UpdateOk"
  | "VoucherRedeemOk"
  | "VoucherRedeemError"
  | "StackingHeightmapDiff"
  | "UserFlatCategories"
  | "EventFlatCategories"
  | "CanNotConnect"
  | "SelectedBadges"
  | "AvailableBadges"
  | "QueueMoveUpdate"
  | "FullGameStatus"
  | "GameStatus"
  | "YouAreSpectator"
  | "LevelEditorNotification"
  | "SessionParams"
  | "Interstitial"
  | "RoomQueueStatus"
  | "MessengerError"
  | "InstantMessageError"
  | "RoomInviteError"
  | "BuddyList"
  | "EmailChangeResult"
  | "UpdateAvatar"
  | "UserWardrobe"
  | "AccountSafetyLockStatus"
  | "EmailStatus"
  | "HotLooks"
  | "CallDeleted"
  | "CallReply"
  | "RegUpdateRequest"
  | "PartnerStatus"
  | "LegacyBannerHandshake"
  | "DhInitHandshake"
  | "DhCompleteHandshake"
  | "CSubscriptionUserGifts"
  | "AccountSafetyLockQuestions"
  | "SpectatingEnded"
  | "RoomForward"
  | "AvailabilityStatus"
  | "InfoHotelClosing"
  | "InfoHotelClosed"
  | "AvailabilityTime"
  | "LoginFailedHotelClosed"
  | "PurchaseNotAllowed"
  | "FurniAliases"
  | "SpectatorAmount"
  | "ErrorReport"
  | "SongInfo"
  | "MachineSoundPackages"
  | "UserSoundPackages"
  | "SongId"
  | "AccountPreferences"
  | "HabboGroupBadge"
  | "FavoriteMembershipUpdate"
  | "HabboGroupDetails"
  | "OneWayDoorStatusChange"
  | "MessengerConsoleMessages"
  | "BuddyRequests"
  | "AcceptFriendResult"
  | "PollOffer"
  | "PollContents"
  | "PollError"
  | "PendingCallsForHelp"
  | "PendingCallsForHelpDeleted"
  | "CallForHelpResult"
  | "SongList"
  | "SoundMachinePlayList"
  | "SongMissingPackages"
  | "PlayListInvalid"
  | "SongListFull"
  | "NowPlaying"
  | "CallForHelpDisabled"
  | "HabboGroupDeactivated"
  | "SongAdded"
  | "InvalidSongName"
  | "UserSongDiscs"
  | "JukeboxDiscs"
  | "SongLocked"
  | "JukeboxPlayListFull"
  | "InvalidSongData"
  | "SongSaved"
  | "MuteAllInRoomResponse"
  | "RoomRating"
  | "UpdateFigure"
  | "FollowFriendFailed"
  | "ClientLatencyPingResponse"
  | "ShowMysteryBoxWait"
  | "CancelMysteryBoxWait"
  | "GotMysteryBoxPrize"
  | "FriendFurniStartConfirmLock"
  | "FriendFurniCancelLock"
  | "FriendFurniLockConfirmedOther"
  | "UserTypingStatusChange"
  | "HighlightUser"
  | "MiniMailArrived"
  | "MiniMailUnreadCount"
  | "RoomDimmerPresets"
  | "RoomEventCanCreateEvent"
  | "RoomEventEventTypes"
  | "RoomEventEventsByEventType"
  | "RoomEventEventInfo"
  | "RoomAdAllowedRooms"
  | "RoomAdListAds"
  | "RoomAdUpdated"
  | "RoomAdError"
  | "RoomAdCancelled"
  | "IgnoreUserResult"
  | "RequestIgnoreList"
  | "HabboSearchResult"
  | "PossibleUserAchievements"
  | "AchievementNotification"
  | "ActivityPointNotification"
  | "UniqueMachineId"
  | "RespectNotification"
  | "CatalogExpired"
  | "AchievementScore"
  | "ResolutionCompleted"
  | "OfficialRooms"
  | "GuestRoomSearchResult"
  | "PopularRoomTagsResult"
  | "GetGuestRoomResult"
  | "NavigatorSettings"
  | "RoomInfoUpdatedNotification"
  | "RoomThumbnailUpdateResult"
  | "Favourites"
  | "FavouriteChanged"
  | "AvatarEffects"
  | "AvatarEffectAdded"
  | "AvatarEffectActivated"
  | "AvatarEffectExpired"
  | "AvatarEffectSelected"
  | "RoomSettingsData"
  | "RoomSettingsError"
  | "RoomSettingsSaved"
  | "RoomSettingsSaveError"
  | "FloorHeightmap"
  | "RoomEntryInfo"
  | "RoomVisualizationSettings"
  | "MultipleStuffDataUpdate"
  | "RoomChatSettings"
  | "RoomFilterSettings"
  | "EnforceRoomCategorySelect"
  | "SpecialRoomEffect"
  | "RoomTypes"
  | "RoomDance"
  | "RoomExpression"
  | "RoomCarryObject"
  | "RoomJoiningGame"
  | "RoomNotJoiningGame"
  | "RoomAvatarEffect"
  | "RoomAvatarSleeping"
  | "RoomUseObject"
  | "JudgeGuiStatus"
  | "StageOpenPerformerGui"
  | "StageClosePerformerGui"
  | "StageStartPlayingSong"
  | "StageStopPlayingSong"
  | "FlatCategoriesWithVisitorData"
  | "TradingAllowed"
  | "FlatControllerAdded"
  | "FlatControllerRemoved"
  | "CanCreateRoom"
  | "ConvertedRoomId"
  | "StripItemNotTradeable"
  | "ClientInfoFeedEnabled"
  | "FaqClientFaqs"
  | "FaqCategories"
  | "FaqText"
  | "FaqSearchResults"
  | "FaqCategory"
  | "IssueInfo"
  | "ModeratorInit"
  | "IssuePickFailed"
  | "ModeratorUserInfo"
  | "CfhChatLog"
  | "RoomChatLog"
  | "UserChatLog"
  | "RoomVisits"
  | "ModeratorRoomInfo"
  | "ModeratorActionResult"
  | "IssueCloseNotification"
  | "HelpRequestSessionAttached"
  | "HelpRequestSessionStarted"
  | "HelpRequestSessionEnded"
  | "HelpRequestSessionDetached"
  | "GuideTicketSessionError"
  | "HelpRequestSessionMessage"
  | "HelpRequestSessionRequesterRoom"
  | "HelpRequestSessionRequesterInvitedToGuideRoom"
  | "HelpRequestSessionTyping"
  | "GuideOnDutyStatus"
  | "ModeratorToolPreferences"
  | "CfhTopicsInit"
  | "CfhNextSanction"
  | "CfhSanctionStatus"
  | "UpdateRoomFloorPropertiesResponse"
  | "QuizData"
  | "QuizResult"
  | "TalentTrack"
  | "TalentTrackLevelUp"
  | "TalentTrackLevel"
  | "ChangeUserNameResult"
  | "CheckUserNameResult"
  | "UserNameChanged"
  | "HotelMergeNameChange"
  | "ChangePetNameResult"
  | "GetPetConfigurationsResult"
  | "PetSupplementedNotification"
  | "PetBreeding"
  | "PetInventory"
  | "PetInfo"
  | "PetLevelNotification"
  | "PetAddedToInventory"
  | "PetRemovedFromInventory"
  | "PetCommands"
  | "PetRespectNotification"
  | "PetReceivedNotification"
  | "PetPlacingFailed"
  | "PetExperience"
  | "MarketplaceMakeOfferResult"
  | "MarketplaceCanMakeOfferResult"
  | "MarketplaceConfiguration"
  | "MarketplaceBuyOfferResult"
  | "MarketplaceCancelOfferResult"
  | "MarketplaceOpenOfferList"
  | "MarketplaceOwnOfferList"
  | "MarketplaceItemStats"
  | "GiftWrappingConfiguration"
  | "PetRespectFailed"
  | "IsOfferGiftable"
  | "SelectableClubGiftInfo"
  | "ClubGiftSelected"
  | "HabboClubOffers"
  | "LoginWithPasswordAccountsDEPRECATED"
  | "BadgePointLimits"
  | "ActivityPoints"
  | "BonusRareInfo"
  | "HabboClubExtendOffer"
  | "DirectClubBuyAllowed"
  | "XmasCalendarDailyOffer"
  | "BadgeReceived"
  | "HabboSnowWarGameTokensOffer"
  | "BundleDiscountRuleset"
  | "LimitedEditionSoldOut"
  | "ProductOffer"
  | "CatalogPageWithEarliestExpiry"
  | "LimitedFurniTimingInfo"
  | "EarnedCommunityGoalPrizes"
  | "CatalogPageExpirationData"
  | "CompetitionEntrySubmitResult"
  | "CompetitionVotingInfo"
  | "SecondsUntil"
  | "CommunityGoalHallOfFame"
  | "IsUserPartOfCompetition"
  | "IsBadgeRequestFulfilled"
  | "CurrentTimingCode"
  | "UserDefinedRoomEventsTrigger"
  | "UserDefinedRoomEventsAction"
  | "UserDefinedRoomEventsCondition"
  | "UserDefinedRoomEventsOpen"
  | "UserDefinedRoomEventsRewardResult"
  | "UserDefinedRoomEventsValidationError"
  | "UserDefinedRoomEventsSaveSuccess"
  | "ConcurrentUsersGoalProgress"
  | "PromoArticles"
  | "CommunityGoalVoteAcknowledged"
  | "Notification"
  | "OfferRewardDelivered"
  | "GameYouArePlayer"
  | "GameNumberValue"
  | "PerkAllowances"
  | "ChangePassword"
  | "CitizenshipVipPromoEnable"
  | "CaptchaResponse"
  | "CommunityGoalProgress"
  | "EpicPopup"
  | "CompetitionRoomsData"
  | "NoOwnedRoomsAlert"
  | "Quests"
  | "QuestCompleted"
  | "Quest"
  | "QuestCancelled"
  | "QuestDaily"
  | "QuestsSeasonal"
  | "HandItemReceived"
  | "MotdResponse"
  | "MuteTimeRemaining"
  | "GetDeviceTokensResponse"
  | "LoginTokensCleared"
  | "RestoreClientFromMinimizedState"
  | "OpenPetPackageRequested"
  | "OpenPetPackageResult"
  | "SellablePetPalettes"
  | "PetBreedingResult"
  | "FriendBarFindFriendsResult"
  | "UnseenElements"
  | "FriendBarEventNotification"
  | "AccountProgressedInfo"
  | "AccountProgressionInfo"
  | "AvatarList"
  | "NewAvatarInfo"
  | "DeactivateAvatarInfo"
  | "InitialRooms"
  | "InitialRoomSelected"
  | "RequestSpamWallPostItMessage"
  | "RoomMessageNotification"
  | "PossibleAchievement"
  | "RelationshipStatusInfo"
  | "ExtendedProfile"
  | "HabboGroupJoinFailed"
  | "GuildCreationInfo"
  | "GuildEditInfo"
  | "GuildEditorData"
  | "GuildMembershipUpdated"
  | "GuildMembershipRejected"
  | "GuildEditFailed"
  | "ExtendedProfileChanged"
  | "GuildMemberMgmtFailed"
  | "GuildMembers"
  | "GuildMemberships"
  | "GuildCreated"
  | "GuildMemberFurniCountInHq"
  | "FlatControllers"
  | "GroupMembershipRequested"
  | "GroupDetailsChanged"
  | "UsersBannedFromRoom"
  | "UserUnbannedFromRoom"
  | "MuteAllInRoom"
  | "UpdatePetFigure"
  | "GuildFurniContextmenuInfo"
  | "MaintenanceStatus"
  | "AvailableResolutionAchievements"
  | "ResolutionProgress"
  | "ConfirmBreedingRequest"
  | "GoToBreedingNestFailure"
  | "ConfirmBreedingResult"
  | "NestBreedingSuccess"
  | "CustomUserNotification"
  | "MysteryBoxKeys"
  | "BuildersClubMembershipStatus"
  | "BuildersClubFurniCount"
  | "Navigator2MetaData"
  | "Navigator2SearchResultBlocks"
  | "Navigator2LiftArea"
  | "Navigator2UserPreferences"
  | "Navigator2UserSavedSearches"
  | "Navigator2UserCollapsedCategories"
  | "CraftableProducts"
  | "CraftingRecipe"
  | "CraftingResult"
  | "CraftingRecipesAvailable"
  | "ProductOffers"
  | "CampaignCalendarData"
  | "CampaignCalendarDoorOpened"
  | "PickUpAllFurniAndResetHeightmap"
  | "StackingHelperHeightUpdate"
  | "RoomEntryTile"
  | "RoomOccupiedTiles"
  | "YoutubeDisplayVideo"
  | "YoutubePlayLists"
  | "YoutubeControlVideo"
  | "RentableSpaceInfo"
  | "RentableSpaceRentOk"
  | "RentableSpaceRentFailed"
  | "TryPhoneNumberResult"
  | "VerifyCodeResult"
  | "VerificationState"
  | "NuxNotComplete"
  | "NuxGiftOffer"
  | "TargetedOffer"
  | "TargetedOfferNotFound"
  | "TargetedOfferList"
  | "GuideReportingStatus"
  | "ChatReviewSessionOfferedToGuide"
  | "ChatReviewSessionStarted"
  | "ChatReviewSessionResults"
  | "ChatReviewTicketCreationResult"
  | "ChatReviewSessionDetached"
  | "ChatReviewSessionVotingStatus"
  | "ChatReviewTicketResolution"
  | "AccountSafetyLock"
  | "PointElement"
  | "InClientLink"
  | "NoobnessLevel"
  | "SubmitGdprRequestResult"
  | "CancelGdprRequestResult"
  | "GetGdprRequestResult"
  | "ForumStats"
  | "ForumThreads"
  | "ForumThreadMessages"
  | "ForumThread"
  | "ForumMessage"
  | "ForumsList"
  | "UnreadForumsCount"
  | "PostForumThreadOk"
  | "PostForumMessageOk"
  | "UserClassifications"
  | "CameraToken"
  | "PhotoPurchaseSuccess"
  | "CameraPictureUrl"
  | "CameraPhotoPrice"
  | "PhotoPublishStatus"
  | "PhotoCompetitionEntryStatus"
  | "RoomThumbnailStatus"
  | "Question"
  | "QuestionAnswered"
  | "QuestionFinished"
  | "Reputation"
  | "InventoryFurniByRoomResult"
  | "BotInventory"
  | "BotAddedToInventory"
  | "BotRemovedFromInventory"
  | "BotReceived"
  | "BotError"
  | "BotCommandConfigurationData"
  | "BotUpdateSkillList"
  | "BotForceOpenContextMenu"
  | "FigureSetIds"
  | "MarketplaceCancelAllOffersResult"
  | "SendPetToHolidayResult"
  | "AgreementTypesResult"
  | "IdentityAgreements"
  | "GuildMembershipRequests"
  | "FlatFavouriteCount"
  | "StartCreateGuildResponse"
  | "CommitCreateGuildResponse"
  | "MeltdownWatchVerify"
  | "EarningStatus"
  | "ClaimEarningResult"
  | "VaultStatus"
  | "UpdateAccountPreferencesResult"
  | "LinkIdentificationMethodResult"
  | "BanInfo"
  | "AntiSpamTriggered"
  | "ServerDebugPong"
  | "DisconnectionReason"
  | "ProxyId"
  | (string & String & {});